/**
 * ============================================================
 * Life Comrades — Google Apps Script (Code.gs)
 * ============================================================
 *
 * Deploy as a Google Apps Script Web App to receive form
 * submissions via POST and write them to the active spreadsheet.
 *
 * FEATURES:
 * - Dynamic Company Info from 'Config' sheet
 * - Unique tracking IDs (SR-YYYYMMDD-XXXX) with LockService
 * - Premium Responsive Email Engine
 * - CRUD operations via doGet/doPost action routing
 *
 * ============================================================
 */

// ─── CORE HANDLERS ──────────────────────────────────────────

/**
 * Main POST handler
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // Wait up to 10 seconds for a lock
    
    var contents = e.postData.contents;
    var data = JSON.parse(contents);
    var type = data.type; 
    var payload = data.payload;
    var settings = getSettings_();
    
    switch(type) {
      case 'booking':
        return handleBookingSubmission_(payload, settings);
      case 'enquiry':
        return handleEnquirySubmission_(payload, settings);
      case 'job_application':
        return handleJobSubmission_(payload, settings);
      case 'updateSettings':
        return updateSettings_(payload);
      default:
        return createResponse_({ success: false, error: 'Unknown submission type: ' + type });
    }
  } catch (err) {
    return createResponse_({ success: false, error: err.message });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Main GET handler (Action Routing)
 */
function doGet(e) {
  var action = (e.parameter && e.parameter.action) || '';
  var id = (e.parameter && e.parameter.id) || '';
  var status = (e.parameter && e.parameter.status) || '';
  var result;

  try {
    switch (action) {
      case 'getBookings': result = getAllBookings_(); break;
      case 'getBookingById': result = getBookingById_(id); break;
      case 'getJobApplications': result = getAllJobApplications_(); break;
      case 'getEnquiries': result = getAllEnquiries_(); break;
      case 'getSettings': result = { success: true, data: getSettings_() }; break;
      default: result = getSystemHealth_(); break;
    }
    return createResponse_(result);
  } catch (err) {
    return createResponse_({ success: false, error: err.message });
  }
}

// ─── SUBMISSION HANDLERS ────────────────────────────────────

function handleBookingSubmission_(payload, settings) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Bookings');
  var requestId = generateUniqueId_('SR', sheet, 1);
  var timestamp = new Date().toISOString();

  sheet.appendRow([
    requestId, timestamp, 'New',
    payload.serviceId || '', payload.serviceName || '',
    payload.date || '', payload.time || '',
    payload.patientName || '', payload.patientAge || '', payload.patientGender || '',
    payload.guardianName || '', payload.relationship || '',
    payload.mobile || '', payload.alternateMobile || '',
    payload.address || '', (payload.city || []).join(', ')
  ]);

  var emailStatus = sendEmail_(
    settings.admin_email, 
    '🏥 New Service Request — ' + requestId + ' | ' + (payload.serviceName || 'Booking'),
    Templates.bookingHtml(payload, requestId, settings)
  );

  return { success: true, type: 'booking', requestId: requestId, emailStatus: emailStatus };
}

function handleEnquirySubmission_(payload, settings) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Enquiries');
  var timestamp = new Date().toISOString();

  sheet.appendRow([
    timestamp, payload.fullName || '', payload.mobile || '',
    payload.email || '', payload.message || '', payload.source || 'contact'
  ]);

  return { success: true, type: 'enquiry' };
}

function handleJobSubmission_(payload, settings) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Job Applications');
  var applicationId = generateUniqueId_('JA', sheet, 1);
  var timestamp = new Date().toISOString();

  sheet.appendRow([
    applicationId, timestamp, 'New',
    payload.jobId || '', payload.jobTitle || '',
    payload.fullName || '', payload.mobile || '', payload.email || '',
    payload.tenthStatus || '', payload.tenthMarks || '',
    payload.twelfthStatus || '', payload.twelfthMarks || '',
    payload.nursingQualification || '',
    payload.isGovtRegistered ? 'Yes' : 'No', payload.registrationNumber || '',
    payload.experienceLevel || '', payload.currentAddress || '', payload.nativeAddress || '',
    payload.message || ''
  ]);

  // Notify Applicant
  var applicantEmailStatus = sendEmail_(
    payload.email,
    '📨 Application Received — ' + applicationId + ' | ' + settings.company_name,
    Templates.jobHtml(payload, applicationId, settings, true)
  );

  // Notify Admin
  sendEmail_(
    settings.admin_email,
    '📋 New Job Application — ' + applicationId + ' | ' + (payload.jobTitle || 'Application'),
    Templates.jobHtml(payload, applicationId, settings, false)
  );

  return { success: true, type: 'job_application', applicationId: applicationId, emailStatus: applicantEmailStatus };
}

// ─── EMAIL ENGINE ───────────────────────────────────────────

function sendEmail_(to, subject, htmlBody) {
  if (!to) return 'No Recipient';
  try {
    MailApp.sendEmail({
      to: to,
      subject: subject,
      htmlBody: htmlBody
    });
    return 'Sent';
  } catch (err) {
    console.error('Email Error: ' + err.message);
    return 'Failed: ' + err.message;
  }
}

var Templates = {
  header: function(settings, displayTitle) {
    return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
           '<body style="margin:0;padding:20px;background:#f0f4f8;font-family:\'Segoe UI\',Tahoma,Geneva,Verdana,sans-serif;color:#333;">' +
           '<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.1); border: 1px solid #e1e8ed;">' +
           '<div style="background:linear-gradient(135deg, #0d9488 0%, #0f766e 100%);padding:40px 30px;text-align:center;color:#fff;">' +
           '<h1 style="margin:0;font-size:28px;font-weight:700;letter-spacing:-0.5px;">' + settings.company_name + '</h1>' +
           '<p style="margin:10px 0 0;font-size:15px;color:rgba(255,255,255,0.9);">' + displayTitle + '</p></div>';
  },
  
  footer: function(settings) {
    return '<div style="background:#f8fafc;padding:30px;text-align:center;border-top:1px solid #edf2f7;">' +
           '<p style="margin:0 0 10px;font-weight:600;color:#64748b;font-size:14px;">' + settings.company_name + '</p>' +
           '<p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.6;">' + settings.office_address + '<br>' +
           'Phone: ' + settings.contact_phone + ' | Email: ' + settings.contact_email + '</p>' +
           '<div style="margin-top:20px;font-size:11px;color:#cbd5e1;">© ' + new Date().getFullYear() + ' Life Comrades Healthcare. All rights reserved.</div>' +
           '</div></div></body></html>';
  },
  
  bookingHtml: function(payload, requestId, settings) {
    var html = this.header(settings, "Service Booking Confirmation");
    html += '<div style="padding:40px 30px;">' +
            '<div style="background:#f0fdfa;border:1px solid #ccfbf1;padding:24px;border-radius:12px;margin-bottom:30px;text-align:center;">' +
            '<div style="font-size:40px;margin-bottom:10px;">✅</div>' +
            '<h2 style="margin:0;color:#134e4a;font-size:20px;">Request Successfully Received</h2>' +
            '<p style="margin:5px 0 0;color:#0f766e;font-size:14px;">ID: ' + requestId + '</p></div>' +
            '<table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;line-height:1.6;color:#475569;">' +
            '<tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><strong>Service</strong></td><td style="text-align:right;">' + (payload.serviceName || 'N/A') + '</td></tr>' +
            '<tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><strong>Patient</strong></td><td style="text-align:right;">' + (payload.patientName || 'N/A') + '</td></tr>' +
            '<tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><strong>Date/Time</strong></td><td style="text-align:right;">' + (payload.date || 'N/A') + ' at ' + (payload.time || 'N/A') + '</td></tr>' +
            '<tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><strong>Location</strong></td><td style="text-align:right;">' + (payload.city || []).join(', ') + '</td></tr>' +
            '</table>' +
            '<div style="margin-top:35px;text-align:center;"><p style="font-size:14px;color:#64748b;">Our coordination team will contact you shortly to confirm the assignment.</p></div>' +
            '</div>';
    html += this.footer(settings);
    return html;
  },
  
  jobHtml: function(payload, applicationId, settings, forApplicant) {
    var title = forApplicant ? "Your Application Status" : "New Candidate Application";
    var html = this.header(settings, title);
    html += '<div style="padding:40px 30px;">' +
            '<div style="background:#eff6ff;border:1px solid #dbeafe;padding:24px;border-radius:12px;margin-bottom:30px;">' +
            '<h3 style="margin:0;color:#1e40af;font-size:18px;">' + (forApplicant ? "Thanks for applying, " + payload.fullName : "New Application Received") + '</h3>' +
            '<p style="margin:5px 0 0;color:#3b82f6;font-size:13px;">Application ID: ' + applicationId + '</p></div>' +
            '<div style="font-size:15px;color:#475569;line-height:1.6;">' +
            '<p><strong>Position:</strong> ' + (payload.jobTitle || 'N/A') + '</p>' +
            '<p><strong>Applicant Name:</strong> ' + (payload.fullName || 'N/A') + '</p>' +
            '<p><strong>Qualification:</strong> ' + (payload.nursingQualification || 'N/A') + '</p>' +
            '<p><strong>Experience:</strong> ' + (payload.experienceLevel || 'N/A') + '</p>' +
            (forApplicant ? '<p style="margin-top:30px;">We have received your application and our HR team will review it within 2-3 business days.</p>' : '<p>Please log in to the admin panel to review the full details and schedule an interview.</p>') +
            '</div></div>';
    html += this.footer(settings);
    return html;
  }
};

// ─── SETTINGS & UTILITIES ────────────────────────────────────

function getSettings_() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Config');
  if (!sheet) return getDefaultSettings_();
  
  var data = sheet.getDataRange().getValues();
  var settings = {};
  for (var i = 1; i < data.length; i++) {
    settings[data[i][0]] = data[i][1];
  }
  return settings;
}

function getDefaultSettings_() {
  return {
    company_name: 'Life Comrades',
    tagline: 'Trusted Home Nursing & Healthcare Services',
    admin_email: 'care@lifecomrades.com',
    contact_email: 'care@lifecomrades.com',
    contact_phone: '+91 93425 25150',
    office_address: 'Chennai, Tamil Nadu',
    website_url: 'https://lifecomrades.com'
  };
}

function updateSettings_(payload) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Config') || ss.insertSheet('Config');
  
  // Format incoming settings (flatten nested objects if any)
  var settingsMap = {
    company_name: payload.company?.name || payload.company_name,
    tagline: payload.company?.tagline || payload.tagline,
    admin_email: payload.contact?.email || payload.admin_email,
    contact_email: payload.contact?.email || payload.contact_email,
    contact_phone: payload.contact?.phone || payload.contact_phone,
    office_address: payload.contact?.address || payload.office_address
  };
  
  sheet.clear();
  sheet.appendRow(['Key', 'Value']);
  Object.keys(settingsMap).forEach(function(key) {
    if (settingsMap[key]) {
      sheet.appendRow([key, settingsMap[key]]);
    }
  });
  sheet.getRange(1, 1, 1, 2).setFontWeight('bold').setBackground('#0d9488').setFontColor('#ffffff');
  
  return { success: true, message: 'Settings updated in GSheet' };
}

function generateUniqueId_(prefix, sheet, idColIndex) {
  var now = new Date();
  var dateStr = Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyyMMdd');
  var todayPrefix = prefix + '-' + dateStr + '-';
  var lastRow = sheet.getLastRow();
  var count = 0;
  if (lastRow > 1) {
    var ids = sheet.getRange(2, idColIndex, lastRow - 1, 1).getValues();
    for (var i = 0; i < ids.length; i++) {
        var strId = String(ids[i][0]);
        if (strId.indexOf(todayPrefix) === 0) {
            count++;
        }
    }
  }
  return todayPrefix + ('0000' + (count + 1)).slice(-4);
}

function sheetToArray_(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
  return data.map(function(row) {
    var obj = {};
    headers.forEach(function(h, j) { obj[h] = row[j]; });
    return obj;
  });
}

function createResponse_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

// ─── ADMIN FETCHERS ──────────────────────────────────────────

function getAllBookings_() {
  return { success: true, data: sheetToArray_(SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Bookings')) };
}

function getAllJobApplications_() {
  return { success: true, data: sheetToArray_(SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Job Applications')) };
}

function getAllEnquiries_() {
  return { success: true, data: sheetToArray_(SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Enquiries')) };
}

function getSystemHealth_() {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    sheets: SpreadsheetApp.getActiveSpreadsheet().getSheets().map(function(s) { return s.getName(); })
  };
}

// ─── INITIALIZATION ──────────────────────────────────────────

function initProject() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Config Sheet
  var conf = ss.getSheetByName('Config') || ss.insertSheet('Config');
  conf.clear();
  conf.appendRow(['Key', 'Value']);
  var defaults = getDefaultSettings_();
  Object.keys(defaults).forEach(function(k) {
    conf.appendRow([k, defaults[k]]);
  });
  conf.getRange(1, 1, 1, 2).setFontWeight('bold').setBackground('#0d9488').setFontColor('#ffffff');

  // 2. Bookings
  var b = ss.getSheetByName('Bookings') || ss.insertSheet('Bookings');
  b.getRange(1, 1, 1, 16).setValues([['Request ID','Timestamp','Status','Service ID','Service Name','Date','Time','Patient Name','Patient Age','Patient Gender','Guardian Name','Relationship','Mobile','Alternate Mobile','Address','City']]);
  b.getRange(1, 1, 1, 16).setFontWeight('bold').setBackground('#0d9488').setFontColor('#ffffff');

  // 3. Enquiries
  var e = ss.getSheetByName('Enquiries') || ss.insertSheet('Enquiries');
  e.getRange(1, 1, 1, 6).setValues([['Timestamp','Full Name','Mobile','Email','Message','Source']]);
  e.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#0d9488').setFontColor('#ffffff');

  // 4. Job Applications
  var j = ss.getSheetByName('Job Applications') || ss.insertSheet('Job Applications');
  j.getRange(1, 1, 1, 19).setValues([['Application ID','Timestamp','Status','Job ID','Job Title','Full Name','Mobile','Email','10th Status','10th Marks','12th Status','12th Marks','Nursing Qualification','Govt Registered','Registration Number','Experience Level','Current Address','Native Address','Message']]);
  j.getRange(1, 1, 1, 19).setFontWeight('bold').setBackground('#0d9488').setFontColor('#ffffff');

  return "Project Integrated Successfully!";
}
