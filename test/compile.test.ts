import { test } from "./utils.ts";

Deno.test("Strings with dangerous characters", async () => {
  await test({
    template:
      "<h1>Test</h1><script>let name = 'Gandalf'; console.log(`Hi ${name}.`);</script>",
    expected:
      "<h1>Test</h1><script>let name = 'Gandalf'; console.log(`Hi ${name}.`);</script>",
  });
  await test({
    template:
      '<h1>Test</h1><script>let name = "Gandalf"; console.log(`Hi ${name}.`);</script>',
    expected:
      '<h1>Test</h1><script>let name = "Gandalf"; console.log(`Hi ${name}.`);</script>',
  });
  await test({
    template:
      '<h1>Test</h1><script>let name = "Gandalf"; console.log(\`Hi ${name}.\`);</script>',
    expected:
      '<h1>Test</h1><script>let name = "Gandalf"; console.log(\`Hi ${name}.\`);</script>',
  });
  await test({
    template: "\\`",
    expected: "\\`",
  });
});
