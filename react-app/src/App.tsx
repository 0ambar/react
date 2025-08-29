import './App.css'

export function App() {

  const handleSubmit = () => {

  }

  return(
    <>
      <main>
        <div className='container'>
          <form
            className="form-login"
            id="login"
            onSubmit={handleSubmit}
          >
            <label htmlFor="login">Email</label>
            <input type="text" />
            <label htmlFor="login">Password</label>
            <input type="password"/>
          </form>
        </div>
      </main>
    </>
  )
}