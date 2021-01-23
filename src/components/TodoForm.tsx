import React, {useRef} from "react"

interface TodoFromProps {
    onAdd(title:string):void
}

export const TodoForm: React.FC<TodoFromProps> = (props) => {
    const {onAdd} = props;

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHendler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter") {
            onAdd(ref.current!.value)
            ref.current!.value = ''
        }

    }

    return (
        <div className="input-field mt2">
            <input 
            onKeyPress={keyPressHendler}
            ref={ref}
             type="text" id="title" placeholder="Введите название дела"/>
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}

 