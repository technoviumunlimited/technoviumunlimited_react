import "./Signup.scss";

const Signup = () => {



   return  (
      <>
      <div id="singup" className="singup_container">
      <form action="/api/user/signup" method="post">
         <input type="text" name="username" id="username"/>
         <input type="email" name="email" id="email" />
         <input type="text" name="password" id="" />
         <input type="text" name="" id="" />
         <button type="submit"> SIGNUP </button>
      </form>
      </div>
      </>
   );
}

export default Signup