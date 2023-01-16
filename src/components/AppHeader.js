import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilterStatus } from '../slices/todoSlice'
import PrimaryButton from './PrimaryButton'
import SecondaryButton, { SelectButton } from './SecondaryButton'
import TodoModal from './TodoModal'
const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const filterStatus = useSelector((state) => state.todo.filterStatus)
  
  const dispatch = useDispatch()

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value))
  }

  return (
    <div className='appHeader'>
    <PrimaryButton onClick={() => setModalOpen(true)}>Add Task</PrimaryButton>
    <SelectButton 
    id= "status"   
    value={filterStatus} 
    onChange={updateFilter}
    >
      <option value="all">All</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">Complete</option>
    </SelectButton>
    <TodoModal type="Add" modalOpen={modalOpen} setModalOpen={setModalOpen}></TodoModal>
    </div>
    
  )
}

export default AppHeader