import React from "react";
import styles from "../../assests/css/AddContact.module.css";
function AddContact(props) {
  const { handleChange, handleAddContact, collapse, handleCollapse } = props;
  return (
    <div className={styles.formWrapper}>
      {collapse ? (
        <form className={styles.form} onSubmit={handleAddContact}>
          <div className={styles.close}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
              height={20}
              style={{ cursor: "pointer" }}
              onClick={handleCollapse}
            />
          </div>
          <div className={styles.title}>
            <h2>Add A New Contact</h2>
          </div>
          <div className={styles.field}>
            <div className={styles.labelField}>
              <label htmlFor="name">Name</label>
            </div>
            <div className={styles.inputField}>
              <input id="name" type="text" onChange={handleChange} required />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.labelField}>
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.inputField}>
              <input id="email" type="email" onChange={handleChange} required />
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.labelField}>
              <label htmlFor="phone">Phone</label>
            </div>
            <div className={styles.inputField}>
              <input
                id="phone"
                type="number"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.buttonField}>
              <button type="submit">Create Contact</button>
            </div>
          </div>
        </form>
      ) : (
        <div onClick={handleCollapse} style={{ cursor: "pointer" }}>
          <h2>
            <u>
              <i>Click Here To Add a New Contact</i>
            </u>
          </h2>
        </div>
      )}
    </div>
  );
}

export default AddContact;
