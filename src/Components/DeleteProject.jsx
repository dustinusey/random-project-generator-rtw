import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SB_URL,
  import.meta.env.VITE_SB_KEY
);

const DeleteProject = (props) => {
  async function deleteProject(projectID) {
    console.log(projectID);
    let { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", projectID);

    error ? console.error("Error: ", error) : location.reload();
  }
  return (
    <div
      onClick={() => {
        deleteProject(props.projectID);
      }}
      className="group-hover:left-[95%] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[105%] 
    h-[80%] w-[70px] grid place-items-center duration-300 cursor-pointer"
    >
      <svg
        className="size-[15px] text-zinc-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
export default DeleteProject;
