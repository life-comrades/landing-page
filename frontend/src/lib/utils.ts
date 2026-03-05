export const formatTimeTo12H = (time24: string | undefined): string => {
    if (!time24) return "—";

    try {
        const [hours, minutes] = time24.split(':');
        let h = parseInt(hours, 10);
        const m = minutes;
        const ampm = h >= 12 ? 'PM' : 'AM';

        h = h % 12;
        h = h ? h : 12; // the hour '0' should be '12'

        return `${h.toString().padStart(2, '0')}:${m} ${ampm}`;
    } catch (error) {
        return time24;
    }
};
