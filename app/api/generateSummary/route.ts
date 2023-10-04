import openai from "@/openai";
// 


export async function POST(request: Request) {
  // todos in the body of post request
  const { todos } = await request.json();
  console.log(todos);

  // communicate with OpenAI
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding. Welcome the user always as Mr. Naveed and say welcome to the Smart Kanban Board! Limit the response to 200 characters",
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To DO, in progress and done, tge tell the user to have a productive day! Here is the data: ${JSON.stringify(
          todos
        )} `,
      },
    ],
  });

  console.log("Data IS:", response);
  // const { data} = response;
}
