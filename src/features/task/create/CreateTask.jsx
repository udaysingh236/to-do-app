import { useState } from "react";
import { Form } from "react-router-dom";
import Input from "../../../ui/Input";

function CreateTask() {
  const [taskItems, setTaskItems] = useState([{ itemName: "", itemDes: "" }]);
  const [checked, setChecked] = useState(false);
  function handleItemNameFormChange(e, index) {
    e.preventDefault();
    setTaskItems((items) => {
      items.map((item, i) =>
        index === i ? (item.itemName = e.target.value) : item.itemName,
      );
    });
  }
  function handleItemDesFormChange(e, index) {
    e.preventDefault();
    setTaskItems((items) => {
      items.map((item, i) =>
        index === i ? (item.itemDes = e.target.value) : item.itemDes,
      );
    });
  }

  function removeItem(index) {
    setTaskItems((items) => {
      return items.filter((_, i) => i !== index);
    });
  }

  function addItem() {
    setTaskItems((items) =>
      items.concat({
        itemName: "",
        itemDes: "",
      }),
    );
  }

  function handleCheckChange() {
    setChecked(!checked);
  }
  return (
    <div className="p-2">
      <h2 className="text-center text-xl font-medium">
        Got a task ? Let's go!
      </h2>
      <Form className="mt-4 space-y-4">
        <div>
          <label htmlFor="taskName" className="text-lg">
            Task Name
          </label>
          <input
            className="w-full rounded-lg p-1 text-lg shadow-md focus:outline-none focus-visible:outline-none"
            type="text"
            name="taskName"
            id="taskName"
            defaultValue="Upcoming Grow"
          />
        </div>
        <div>
          <label htmlFor="taskDes" className="text-lg">
            Task Description
          </label>
          <input
            type="text"
            className="w-full rounded-lg p-1 text-lg shadow-md focus:outline-none focus-visible:outline-none"
            name="taskDes"
            id="taskDes"
          />
        </div>
        <div>
          <label htmlFor="taskDate" className="text-lg">
            Task Date
          </label>
          <div className="flex flex-col gap-2">
            <input
              disabled={checked && `disabled`}
              type="date"
              className={
                !checked
                  ? `w-full rounded-lg bg-white p-1 text-lg shadow-md focus:outline-none focus-visible:outline-none`
                  : `w-full rounded-lg bg-waikawa-gray-50 p-1 text-lg shadow-md focus:outline-none focus-visible:outline-none `
              }
              defaultValue={
                !checked ? new Date().toLocaleDateString("en-CA") : ""
              }
              min={!checked ? new Date().toLocaleDateString("en-CA") : ""}
              name="taskDate"
              id="taskDate"
            />

            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="everyDay"
                name="everyDay"
                value={checked}
                onChange={handleCheckChange}
              />
              <label htmlFor="everyDay">Mark everyday until closed</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="" className="text-lg font-medium">
            Your task items please! 😎{" "}
          </label>
        </div>
        <div>
          <div className="space-y-2">
            {taskItems.map((item, index) => {
              return (
                <div className="space-y-1 rounded-lg border p-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="font-Pacifico">
                      Task item: {index + 1}
                    </label>
                    <button
                      onClick={() => removeItem(index)}
                      className=" rounded-md border-2 border-waikawa-gray-700  px-1 py-1 text-sm text-waikawa-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name={`itemName-${index}`}
                      key={`1${index}`}
                      placeholder="Item Name"
                      value={item.itemName}
                      onChange={(e) => handleItemNameFormChange(e, index)}
                    />
                    <Input
                      type="text"
                      name={`itemDes-${index}`}
                      key={`2${index}`}
                      placeholder="Item Description"
                      value={item.itemDes}
                      onChange={(e) => handleItemDesFormChange(e, index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex items-center justify-start">
            <button
              onClick={addItem}
              className="rounded-3xl border px-2 py-1 text-sm text-waikawa-gray-600"
            >
              {taskItems.length > 0 ? "Add more" : "Add item"}
            </button>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <button
            type="submit"
            className="rounded-3xl bg-portage-700  px-2 py-1 text-lg text-waikawa-gray-50"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateTask;
