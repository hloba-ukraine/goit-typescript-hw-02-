// === Библиотечные модули ===

import toast, { Toaster } from "react-hot-toast";
import { Form, Formik, Field } from "formik";
export default function SearchBar({ handleSearch }) {
  const notify = () => toast("Please enter the search criteria");
  const initialValues = {
    searchTerm: "",
  };

  const handleSubmit = (values) => {
    if (!values.searchTerm) {
      notify();
      return;
    } else {
      handleSearch(values.searchTerm);
    }
  };

  return (
    <header>
      <Toaster />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            id="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchTerm"
          />
          <br />
          <button type="submit"> Search</button>
        </Form>
      </Formik>
    </header>
  );
}
