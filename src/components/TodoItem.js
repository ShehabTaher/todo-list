import React, { useEffect, useState } from "react";
import { getClasses } from "../utils/getClasses";
import styles from "../styles/modules/todoItem.module.scss";
import { format } from "date-fns/esm";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import { toast } from "react-hot-toast";
import TodoModal from "./TodoModal";
import CheckButton from "./CheckButton";
import { motion } from "framer-motion";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)

  useEffect(() => {
    if(todo.status === 'complete'){
      setChecked(true)
    }else{
      setChecked(false)
    }
  },[todo.status])

 
const child = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted successfully");
  };
  const handleUpdate = () => {
    setUpdateModalOpen(true)
  };
  const handleChecked = () => {
    setChecked(!checked)
    dispatch(updateTodo({
      ...todo,
      status: checked ? 'incomplete' : 'complete'
    }))
  }
  return (
    <>
      <motion.div className="item" variants={child}>
        <div className="todoDetails">
          <CheckButton checked={checked} handleChecked={handleChecked} />
          <div className="texts">
            <p
              className={getClasses([
                styles.todoText,
                todo.status === "complete" && styles["todoText--completed"],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), "p, dd/MM/yyyy")}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <TodoModal
      type='Update' 
      todo={todo}
      modalOpen={updateModalOpen} 
      setModalOpen={setUpdateModalOpen} />
    </>
  );
}

export default TodoItem;
