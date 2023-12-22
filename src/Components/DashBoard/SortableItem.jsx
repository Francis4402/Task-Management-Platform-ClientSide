import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function SortableItem(props) {

    const {title, description, priority, timestamp} = props.id;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div className="border shadow rounded-xl w-full">
                <div className="card-body">
                    <div className="flex items-center md:gap-40 gap-52">
                        <h1 className="card-title">{title}</h1>
                        <p>{timestamp}</p>
                    </div>
                    <div className="flex items-center gap-40">
                        <p className="">{description}</p>
                        <p>{priority}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}