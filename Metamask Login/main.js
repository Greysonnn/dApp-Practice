/* Moralis init code */
const serverUrl = "https://edvyl4r9j2fg.usemoralis.com:2053/server";
const appId = "gh3825SZPmh8YVxbvR0jvYtMkorBYKVoanznYZpl";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console(error);
        });
    }
  }

  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
const metaLogin = document.getElementById("btn-login").onclick = login;
const metaLogout = document.getElementById("btn-logout").onclick = logOut;