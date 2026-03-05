import { getISRData } from '@/lib/api';

export const revalidate = 3600;

export async function generateMetadata() {
    const { content, metadata } = await getISRData();
    const m = metadata?.book || content.pagesMetadata?.book || content.globalMetadata || {};
    return {
        title: m.title,
        description: m.description,
        keywords: m.keywords,
    };
}

export default function BookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
