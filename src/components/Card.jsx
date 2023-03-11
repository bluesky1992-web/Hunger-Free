export default function Card(props) {
  return (
    <div className="px-5 ">
        
      <div className="  w-[250px] h-[400px] rounded-lg bg-white shadow-lg  mx-2 mb-4">
        <a href="#!">
          <img
            className="rounded-t-lg w-full"
            src={props.imageUrl}
            alt={props.title}
          />
        </a>
        <div className="p-6">
          <h5 className=" whitespace-pre-line mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {props.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

