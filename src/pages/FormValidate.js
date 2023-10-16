import React, { useState } from 'react'

const FormValidate = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, seterrorConfirmPassword] = useState("");

    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    const validate = ((e) => {
        e.preventDefault();

        if(username.length > 8) {
            setErrorUserName("");
            setUserColor("green")
        } else {
            setErrorUserName("Username must be 8 character logn");
            setUserColor("red")
        }

        if(email.includes("@gmail")) {
            setErrorEmail("")
            setEmailColor("green")
        } else {
            setEmailColor("red")
            setErrorEmail("Email should have @gmail")
        }

        if(password.length > 8) {
            setErrorPassword("")
            setPasswordColor("green")
        } else {
            setErrorPassword("Shold should have at least 8 character long")
            setPasswordColor("red")
        }

        if(password != "" && password == confirmPassword) {
            seterrorConfirmPassword("")
            setConfirmPasswordColor("green")
        } else {
            seterrorConfirmPassword("Password didn't match")
            setConfirmPasswordColor("red")
        }
    })

  return (
    <div className='form-card'>
        <form>
            <input
                type='text'
                placeholder='Your name'
                style={{borderColor: userColor}}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <p className='error'>{errorUserName}</p>

            <input
                type='email'
                placeholder='Your email'
                style={{borderColor: emailColor}}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <p className='error'>{errorEmail}</p>

            <input
                type='password'
                placeholder='Your password'
                style={{borderColor: passwordColor}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p className='error'>{errorPassword}</p>

            <input
                type='password'
                placeholder='Your confirm password'
                style={{borderColor: confirmPasswordColor}}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className='error'>{errorConfirmPassword}</p>
            <button onClick={validate}>Submit</button>
        </form>
    </div>
  )
}

export default FormValidate