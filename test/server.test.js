import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createAppServer } from "../src/server.js";

let server;
let baseURL;

before(async () => {
  server = createAppServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  baseURL = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("BUG-101: a deleted student's grade request returns 404", async () => {
  const createResponse = await fetch(`${baseURL}/transcripts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Ada" }),
  });
  assert.equal(createResponse.status, 201);
  const { studentID } = await createResponse.json();

  const addGradeResponse = await fetch(
    `${baseURL}/transcripts/${studentID}/CS360`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ grade: 90 }),
    },
  );
  assert.equal(addGradeResponse.status, 201);

  const deleteResponse = await fetch(`${baseURL}/transcripts/${studentID}`, {
    method: "DELETE",
  });
  assert.equal(deleteResponse.status, 204);

  const gradeResponse = await fetch(
    `${baseURL}/transcripts/${studentID}/CS360`,
  );
  assert.equal(gradeResponse.status, 404);

  const transcriptResponse = await fetch(
    `${baseURL}/transcripts/${studentID}`,
  );
  assert.equal(transcriptResponse.status, 404);
});
