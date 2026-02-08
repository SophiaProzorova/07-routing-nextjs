"use client"

import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const NotePreviewClient = ({ id }: Props) => {
  const router = useRouter();
  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  const formattedDate = note.createdAt ? `Created at: ${note.createdAt}` : "";

  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        Close
      </button>
      <h2>{note.title}</h2>
      <p>{note.tag}</p>
      <p>{note.content}</p>
      {formattedDate && <p>{formattedDate}</p>}
    </div>
  );
};

export default NotePreviewClient;
