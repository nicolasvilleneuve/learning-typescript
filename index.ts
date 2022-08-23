import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/comments/1";

interface Comments {
    id: number,
    body: string,
    email: string
}

axios.get(url).then(response => {
    const comments = response.data as Comments;
    const ID = comments.id;
    const content = comments.body;
    logComments(ID, content);
});

const logComments = (ID: number, content: string) => {
    console.log(`${ID}, ${content}`);
};
