/**
 * Booking Model
 * Represents a service booking request from a patient/guardian.
 *
 * Structure:
 * {
 *   serviceId: string,
 *   serviceName: string,
 *   city: string[],
 *   date: string,
 *   time: string,
 *   patientName: string,
 *   patientAge: string,
 *   patientGender: string,
 *   guardianName: string,
 *   relationship: string,
 *   mobile: string,
 *   alternateMobile: string,
 *   address: string
 * }
 */
class Booking {
    constructor(data = {}) {
        this.serviceId = data.serviceId || '';
        this.serviceName = data.serviceName || '';
        this.city = data.city || [];
        this.date = data.date || '';
        this.time = data.time || '';
        this.patientName = data.patientName || '';
        this.patientAge = data.patientAge || '';
        this.patientGender = data.patientGender || '';
        this.guardianName = data.guardianName || '';
        this.relationship = data.relationship || '';
        this.mobile = data.mobile || '';
        this.alternateMobile = data.alternateMobile || '';
        this.address = data.address || '';
    }

    /**
     * Creates a Booking instance from a Firestore document snapshot.
     * @param {FirebaseFirestore.DocumentSnapshot} doc
     * @returns {Booking}
     */
    static fromFirestore(doc) {
        return new Booking({ ...doc.data() });
    }

    /**
     * Converts to a plain object for JSON serialization / Firestore writes.
     * @returns {object}
     */
    toJSON() {
        return {
            serviceId: this.serviceId,
            serviceName: this.serviceName,
            city: [...this.city],
            date: this.date,
            time: this.time,
            patientName: this.patientName,
            patientAge: this.patientAge,
            patientGender: this.patientGender,
            guardianName: this.guardianName,
            relationship: this.relationship,
            mobile: this.mobile,
            alternateMobile: this.alternateMobile,
            address: this.address,
        };
    }
}

module.exports = Booking;
