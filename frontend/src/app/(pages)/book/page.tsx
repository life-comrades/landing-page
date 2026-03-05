import React from 'react';
import { BookingFormContainer } from '../Booking/BookingFormContainer';
import { getISRData } from '../../../lib/api';

export const revalidate = 3600;

export async function generateMetadata() {
    const { content } = await getISRData();
    const bookMetadata = content.pagesMetadata?.book || content.globalMetadata;
    return {
        title: bookMetadata.title,
        description: bookMetadata.description,
        keywords: bookMetadata.keywords,
    };
}

export default async function BookPage() {
    const { services } = await getISRData();

    return <BookingFormContainer services={services} />;
}
