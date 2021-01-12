const Contact = ({ name, number, id, onDeleteButton }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button
        onClick={() => {
          onDeleteButton(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
