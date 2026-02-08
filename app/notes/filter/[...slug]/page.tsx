import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

type Props = {
    params: Promise<{ slug: string[] }>
};

const NotePage = async ({ params }: Props) => {
    const { slug } = await params;
    const tagSlug = slug?.[0] ?? "all";
    const tag = tagSlug === "all" ? undefined : tagSlug;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["notes", tag, 1, ""],
        queryFn: () => fetchNotes("", 1, tag),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient tag={tag} />
        </HydrationBoundary>
    );
};

export default NotePage;
