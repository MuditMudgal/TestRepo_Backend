require("dotenv").config();
const express = require("express");

const app = express();

const port = 3000;

const githubData = {
    login: "MuditMudgal",
    id: 146031145,
    node_id: "U_kgDOCLRCKQ",
    avatar_url: "https://avatars.githubusercontent.com/u/146031145?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/MuditMudgal",
    html_url: "https://github.com/MuditMudgal",
    followers_url: "https://api.github.com/users/MuditMudgal/followers",
    following_url:
        "https://api.github.com/users/MuditMudgal/following{/other_user}",
    gists_url: "https://api.github.com/users/MuditMudgal/gists{/gist_id}",
    starred_url:
        "https://api.github.com/users/MuditMudgal/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/MuditMudgal/subscriptions",
    organizations_url: "https://api.github.com/users/MuditMudgal/orgs",
    repos_url: "https://api.github.com/users/MuditMudgal/repos",
    events_url: "https://api.github.com/users/MuditMudgal/events{/privacy}",
    received_events_url:
        "https://api.github.com/users/MuditMudgal/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
    name: "Mudit_Mudgxl",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: "just a geek who wants to add PINCH of creativity to CODE",
    twitter_username: null,
    public_repos: 6,
    public_gists: 0,
    followers: 1,
    following: 8,
    created_at: "2023-09-25T20:14:01Z",
    updated_at: "2026-08-12T13:43:58Z",
};



app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get("/twitter", (req, res) => {
    res.send("muditmudgxl.twitter");
});

app.get("/login", (req, res) => {
    res.send("<h1>please login with youe email_ID</h1>");
});

app.get("/youtube", (req, res) => {
    res.send("<h2>chai aur code</h2>");
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});


