function DoctorInfo({children,placeholder,text}) {
  return (
    // <div className="flex gap-2">
    //   <div className="flex items-center h-fit gap-2">
    //     {children} <span className="font-bold">{placeholder}: </span>
    //   </div>
    //   <p className="hyphens-auto break-all">{text}</p>
    // </div>
    <div className="flex flex-col mb-2">
      <div className="flex items-center h-fit gap-2">
        {children} <span className="font-bold">{placeholder}: </span>
      </div>
      <p className="hyphens-auto break-all">{text}</p>
    </div>
  );
}

export default DoctorInfo;
