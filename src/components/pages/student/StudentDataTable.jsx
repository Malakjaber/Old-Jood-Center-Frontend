export default function StudentDataTable() {
  const array = [
    { title: "Name:", data: "Mohamad" },
    { title: "Id:", data: "86875" },
    { title: "Birth Date:", data: "10/7/2013" },
    { title: "Pathological case:", data: "Autism" },
    { title: "Phone:", data: "058373678" },
    { title: "Address:", data: "Palestine,Ramallah,Altereh" },
    {
      title: "Medicines:",
      data: "1st med/..hr3  / etc...hr3 med / etc...",
    },
  ];
  return (
    <div className="h-full mr-8">
      {array.map((part) => {
        return (
          <div className="flex border-b border-b-lightgray my-5 p-5">
            <p className=" text-gray text-2xl mr-3">{part.title}</p>
            <p className=" text-2xl overflow-hidden">{part.data}</p>
          </div>
        );
      })}
    </div>
  );
}
