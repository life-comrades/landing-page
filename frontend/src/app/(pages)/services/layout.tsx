import { getISRData } from '@/lib/api';

export const revalidate = 3600;

export async function generateMetadata() {
    const { content, metadata } = await getISRData();
    const m = metadata?.services || content.pagesMetadata?.services || content.globalMetadata || {};
    return {
        title: m.title,
        description: m.description,
        keywords: m.keywords,
    };
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
