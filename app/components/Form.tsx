'use client';
import React, { useState } from "react";
import styles from "../page.module.css"

export default function Form() {

    let [formUser, setFormUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        comment: "",
        isFriendly: false,
        employment: ""
    })
    function handleFormUser(event: any) {
        setFormUser(prevState => {
            const { name, value, checked, type } = event.target
            return { ...prevState, [name]: type === "checkbox" ? checked : value }
        })
    }

    function handleSubmit(event: any) {
        event.preventDefault()
        console.log(formUser)
    }


    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" name="firstName" placeholder="First name" onChange={handleFormUser} />
                <input className={styles.input} type="text" name="lastName" placeholder="Last name" onChange={handleFormUser} />
                <div>
                    <input className={styles.input} type="email" placeholder="sarah@yourmail.com" name="email" onChange={handleFormUser} />
                </div>
                <div>
                    <label htmlFor="state">Choose your state </label>
                    <select name="state" id="state" onChange={handleFormUser} value={formUser.state}>
                        <option value="">-- Choose --</option>
                        <option value="NY">NY</option>
                        <option value="VA">VA</option>
                        <option value="MN">MN</option>
                    </select>
                </div>
                <textarea className={styles.textarea} placeholder="write a comment" name="comment" id="comment" value={formUser.comment} onChange={handleFormUser}></textarea>
                <div>
                    <label htmlFor="isFriendly">Are you friendly? </label>
                    <input type="checkbox" id="isFriendly" name="isFriendly" checked={formUser.isFriendly} onChange={handleFormUser} />
                </div>

                <fieldset className={styles.employment_field}>
                    <legend>Employment status</legend>
                    <div>
                        <input type="radio" id="full-time" value="full-time" name="employment" checked={formUser.employment === "full-time"} onChange={handleFormUser} />
                        <label htmlFor="full-time"> Full-time</label>
                    </div>
                    <div>

                        <input type="radio" id="part-time" value="part-time" name="employment" checked={formUser.employment === "part-time"} onChange={handleFormUser} />
                        <label htmlFor="part-time"> Part-time</label>
                    </div>
                    <div>

                        <input type="radio" id="unemployed" value="unemployed" name="employment" checked={formUser.employment === "unemployed"} onChange={handleFormUser} />
                        <label htmlFor="unemployed"> Unemployed</label>
                    </div>

                </fieldset>

                <button>Submit</button>
            </form>
            <h2>Hello {formUser.firstName} {formUser.lastName}!</h2>
        </div>
    )
}
