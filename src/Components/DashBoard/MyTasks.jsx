import useAuth from "../Hooks/useAuth.jsx";
import useAxiosPublic from "../AxiosFiles/useAxiosPublic.jsx";
import {useQuery} from "@tanstack/react-query";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    closestCorners
} from "@dnd-kit/core";
import {SortableContext, arrayMove, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {useState} from "react";
import {SortableItem} from "./SortableItem.jsx";

const MyTasks = () => {

    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const {data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    })

    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));

    const [activeId, setActiveId] = useState(null);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);


    const findValueOfItems = (id, type) => {
        if(type === 'container'){
            return tasks.find((task) => task.id.title === id);
        }
        if(type === 'item') {
            return tasks.find(item => item.id.title === id);
        }
    }
    const handleDragStart = e => {
        const {active} = e;
        const {id} = active;
        setActiveId(id);
    }

    const handleDragMove = ({active, over}) => {
        if(active.id.title !== over.id.title){

        }
    }

    const handleDragEnd = e => {
        e.preventDefault();

        const moveTask = findValueOfItems(activeId, 'container');

        if (moveTask) {
            setOngoingTasks((prevTasks) => [...prevTasks, moveTask]);
        }
    }


    return (
        <div className="px-10">
            <div className="grid xl:grid-cols-3 gap-10">
                <div>
                    <h1 className="text-xl font-semibold border-b py-4">ToDo-List</h1>
                    <div className="border rounded-xl p-4 mt-3">
                        <DndContext sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
                            <SortableContext items={tasks}>
                                <div className="grid gap-5 mt-3">
                                    {
                                        tasks.map(ta => <SortableItem key={ta.id} id={ta} />)
                                    }
                                </div>
                            </SortableContext>
                        </DndContext>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-semibold border-b py-4">Ongoing</h1>
                    <div className="border rounded-xl p-4 mt-3">
                        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                            <SortableContext items={ongoingTasks} strategy={verticalListSortingStrategy}>
                                <div className="grid gap-5 mt-3">
                                    {
                                        ongoingTasks.map(ta => <SortableItem key={ta.id} id={ta} />)
                                    }
                                </div>
                            </SortableContext>
                        </DndContext>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-semibold border-b py-4">Complete</h1>
                    <div className="border rounded-xl p-4 mt-3">
                        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                            <SortableContext items={completedTasks} strategy={verticalListSortingStrategy}>
                                <div className="grid gap-5 mt-3">
                                    {
                                        completedTasks.map(ta => <SortableItem key={ta.id} id={ta} />)
                                    }
                                </div>
                            </SortableContext>
                        </DndContext>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTasks;