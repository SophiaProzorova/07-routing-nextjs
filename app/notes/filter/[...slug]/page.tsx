import NotesClient from "./Notes.client";

type Props = {
    params: Promise<{ slug: string[] }>
};

const NotePage = async ({ params }: Props) => {
    const { slug } = await params;
    return <NotesClient slug={slug} />;
};

export default NotePage;
