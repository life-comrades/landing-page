const Booking = require('../model/Booking');
const Enquiry = require('../model/Enquiry');
const { JobApplication } = require('../model/Job');

/**
 * FormService
 * Handles writing form submissions (Booking, Enquiry, JobApplication)
 * to Google Sheets via the Apps Script Web App.
 */
class FormService {
    constructor() {
        this.webAppUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

        if (!this.webAppUrl) {
            console.warn('GOOGLE_APPS_SCRIPT_URL is not set in .env — FormService will not function correctly.');
        }
    }

    async _sendToWebApp(type, payload) {
        if (!this.webAppUrl) return { success: false, error: 'Web App URL not configured' };

        try {
            const response = await fetch(this.webAppUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type, payload }),
                redirect: 'follow'
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Web App Error: ${response.status} - ${errorText}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error calling Apps Script Web App for ${type}:`, error);
            return { success: false, error: error.message };
        }
    }

    async _fetchFromWebApp(action, params = {}) {
        if (!this.webAppUrl) return { success: false, error: 'Web App URL not configured' };

        try {
            const url = new URL(this.webAppUrl);
            url.searchParams.append('action', action);
            Object.entries(params).forEach(([key, val]) => {
                url.searchParams.append(key, val);
            });

            const response = await fetch(url.toString(), {
                method: 'GET',
                redirect: 'follow'
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Web App Error: ${response.status} - ${errorText}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching from Web App action ${action}:`, error);
            return { success: false, error: error.message };
        }
    }

    // ─── Booking ───────────────────────────────────────────────

    async submitBooking(data) {
        const result = await this._sendToWebApp('booking', data);
        if (result.success) {
            return { success: true, booking: new Booking({ ...data, id: result.requestId }) };
        }
        return result;
    }

    // ─── Enquiry ───────────────────────────────────────────────

    async submitEnquiry(data) {
        const result = await this._sendToWebApp('enquiry', data);
        if (result.success) {
            return { success: true, enquiry: new Enquiry(data) };
        }
        return result;
    }

    // ─── Job Application ───────────────────────────────────────

    async submitJobApplication(data) {
        const result = await this._sendToWebApp('job_application', data);
        if (result.success) {
            return { success: true, application: new JobApplication({ ...data, id: result.applicationId }) };
        }
        return result;
    }

    /**
     * Fetches raw submissions from Apps Script.
     */
    async getNewBookings() {
        const result = await this._fetchFromWebApp('getBookings');
        if (!result.success) return [];
        return result.data.map(row => ({
            gsheetTimestamp: row['Timestamp'],
            serviceId: row['Service ID'],
            serviceName: row['Service Name'],
            date: row['Date'],
            time: row['Time'],
            patientName: row['Patient Name'],
            patientAge: row['Patient Age'],
            patientGender: row['Patient Gender'],
            guardianName: row['Guardian Name'],
            relationship: row['Relationship'],
            mobile: row['Mobile'],
            alternateMobile: row['Alternate Mobile'],
            address: row['Address'],
            city: row['City'],
            status: 'pending'
        }));
    }

    async getNewEnquiries() {
        const result = await this._fetchFromWebApp('getEnquiries');
        if (!result.success) return [];
        return result.data.map(row => ({
            gsheetTimestamp: row['Timestamp'],
            fullName: row['Full Name'],
            mobile: row['Mobile'],
            email: row['Email'],
            message: row['Message'],
            source: row['Source']
        }));
    }

    async getNewApplications() {
        const result = await this._fetchFromWebApp('getJobApplications');
        if (!result.success) return [];
        return result.data.map(row => ({
            gsheetId: row['Application ID'],
            gsheetTimestamp: row['Timestamp'],
            jobId: row['Job ID'],
            jobTitle: row['Job Title'],
            fullName: row['Full Name'],
            mobile: row['Mobile'],
            email: row['Email'],
            qualification: row['Nursing Qualification'],
            experience: row['Experience Level'],
            status: 'pending'
        }));
    }

    async updateConfig(settings) {
        return await this._sendToWebApp('updateSettings', settings);
    }
}

module.exports = FormService;
