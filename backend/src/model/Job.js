/**
 * Job Model
 * Entity for managing job postings.
 */
class Job {
    constructor(data = {}) {
        this.id = data.id || null;
        this.title = data.title || '';
        this.category = data.category || '';
        this.type = data.type || 'Full-time'; // 'Full-time' | 'Part-time' | 'Contract'
        this.location = data.location || '';
        this.salary = data.salary || '';  // plain string e.g. "₹25,000 - ₹35,000"
        this.postedDate = data.postedDate || new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
        this.description = data.description || '';
        this.requirements = data.requirements || [];
        this.responsibilities = data.responsibilities || [];
    }

    static fromFirestore(doc) {
        return new Job({ id: doc.id, ...doc.data() });
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            category: this.category,
            type: this.type,
            location: this.location,
            salary: this.salary,
            postedDate: this.postedDate,
            description: this.description,
            requirements: this.requirements,
            responsibilities: this.responsibilities,
        };
    }
}

module.exports = Job;

