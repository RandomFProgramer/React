import { useState } from "react";
export default function QuestItem(props) {
    // recebe e define o titulo da missão
    const [title, setTitle] = useState(props.quest.title);
    // recebe e define se a missão foi concluída
    const [checked, setChecked] = useState(false);
    // chama o estado de edição da missão no componente
    const [editMode, setEditMode] = useState(false);
    // define o visual da missão na lista
    const concluded = props.quest.status === "concluído";
    return <div>

    </div>;
}

return (
    <div className="flex gap-4 flex-col md:flex-row items-center">
        <div className="flex gap-4 items-center w-full sm:w-[80%]">
            <input
                disabled={concluded}
                type="checkbox"
                checked={checked}
                className="checkbox rounded-full border"
            />
            <p className="break-words">
                {props.quest.title}
            </p>
        </div>
        <div className="flex gap-4 w-full sm:w-fit justify-center">
            <button onClick={() => setEditMode(!editMode)}>Editar</button>
            <button>Excluir</button>
        </div>
    </div>
)

return (
    <div className="flex gap-4 flex-col md:flex-row items-center">
        <div className="flex gap-4 items-center w-full sm:w-[80%]">
            <input
                disabled={concluded}
                type="checkbox"
                checked={checked}
                className="checkbox rounded-full border"

            />

            {editMode && !concluded ? (
                <input
                    placeholder="quest"
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="rounded-full bg-secundary pl-2 w-full input-sm flex focus:outline-none"
                />
            ) : (
                <p className={`break-words ${concluded ? "line-through" : ""}`}>
                    {props.quest.title}
                </p>
            )}
        </div>
        <div className="flex gap-4 w-full sm:w-fit justify-center">
            <button onClick={() => setEditMode(!editMode)}>Editar</button>
            <button>Excluir</button>
        </div>
    </div>
)

{
    !concluded && (
        <div className="flex gap-4 w-full sm:w-fit justify-center">
            <button onClick={() => setEditMode(!editMode)}>Editar</button>
            <button>Excluir</button>
        </div>
    )
}


return (
    <div className= "flex gap-4 flex-ccl md:flex-row items-center">
      <div className="flex gap-4 items-center w-full sm:w-[80%]">
        <input
            disabled={concluded}
                type="checkbox"
                checked={checked}
                className="checkbox rounded-full border"
                onChange = {() =>{
                    if (cocluded) return;
                else{
                    setChecked(!checked);
                    props.saveConcluedQuest(props.quest);

                }
            }}
     />
        {editMode && !concluded ? (
                <input
                    placeholder="quest"
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="rounded-full bg-secundary pl-2 w-full input-sm flex focus:outline-none"
                />
            ) : (
                <p className={`break-words${concluded ? "line-through" : ""}`}>
                    {props.quest.title}
                </p>
            )}
            </div>
            {}
      </div>
    </div>
      
)