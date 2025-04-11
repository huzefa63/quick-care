"use client";
function AccordionItem({el,index,isActive,setIsActive}) {
    function handleClick(e){
        if(isActive){
            setIsActive(null);
            
        }else{
            setIsActive(index);
        }
    }
    return (
      <button onClick={handleClick} className={`bg-white w-full rounded-sm px-5 py-3 shadow-sm   ${isActive ? 'border-t-4 border-cyan-400' : ''} `}>
        <div className="flex justify-between">
          <div className="text-left flex gap-3">
            <p>{index + 1})</p>
            <p>{el.question}</p>
          </div>
          <p className="text-xl font-bold">{isActive ? '-':'+'}</p>
        </div>
        <div className={`mt-3 text-left break-words hyphens-auto ${!isActive ? 'hidden' : ''}`}>
            {/* <em>ANS: </em> */}
            <p>{el.answer}</p>
        </div>
      </button>
    );
}

export default AccordionItem
