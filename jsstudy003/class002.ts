const friends: string[] = ["Jenny", "Michael", "Jay", "Kim"];

console.log(friends);

// friends = ["Jenny", "Michael", "Jay", "Kim"];

friends.push("Henry");

console.log(friends);


for (let i: number = 0; i <friends.length ; i++) {
    console.log(friends[i]);
}

friends.forEach((friend) => console.log(friend));

