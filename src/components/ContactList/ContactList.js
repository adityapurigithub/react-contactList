import React, { useEffect } from "react";
import styles from "../../assests/css/ContactList.module.css";
function ContactList(props) {
  const {
    user,
    loading,
    handleEditContact,
    handleDeleteContact,
    handleUpdateContact,
    handleChangeContact,
    editMode,
  } = props;
  if (loading) {
    return (
      <div>
        <h2>Fetching Contacts Please Wait...</h2>
      </div>
    );
  }

  return (
    <div className={styles.contactListWrapper}>
      {user.map((user, i) => {
        return (
          <div className={styles.contactListCard}>
            {/* <div className={styles.id}>User Id:- {user.id}</div> */}
            <div className={styles.edit}>
              {user.edit ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2874/2874091.png"
                  height={20}
                  id={i}
                  onClick={handleUpdateContact}
                />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png"
                  height={20}
                  id={i}
                  onClick={handleEditContact}
                />
              )}
            </div>
            <div className={styles.del}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                height={20}
                onClick={() => handleDeleteContact(user.id)}
              />
            </div>
            <div className={styles.pic}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                height={100}
              />
            </div>
            {user.edit ? (
              <div className={styles.info}>
                <div className={styles.name}>
                  Name:{" "}
                  <input
                    id="name"
                    type="text"
                    defaultValue={user.name}
                    onChange={handleChangeContact}
                  />
                </div>
                <div className={styles.email}>
                  Email:{" "}
                  <input
                    id="email"
                    type="email"
                    defaultValue={user.email}
                    onChange={handleChangeContact}
                  />
                </div>
                <div className={styles.phone}>
                  Phone:{" "}
                  <input
                    id="phone"
                    type="phone"
                    defaultValue={user.phone}
                    onChange={handleChangeContact}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.info}>
                <div className={styles.name}>
                  <b>
                    <i>{user.name}</i>
                  </b>
                </div>
                <div className={styles.email}>Email: {user.email}</div>
                <div className={styles.phone}>Phone: {user.phone}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
