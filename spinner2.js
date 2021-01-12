const spinner = () => {
  const arms = "|/-|/-|/-|/-| 🥴🥴🥴🥴🥴🥴🥴🥴🤢🤢🤢🤢🤢🤢🤢🤢🤮🤮🤮🤮🤮🤮🤮🤮🤮";
  let initializer = 0;
  let incrementer = 100;
  for (const char of arms) {
    setTimeout(() => {process.stdout.write(`\r\ ${char}`)}, initializer);
    initializer += incrementer;
    //starts at 0 increments
  }
  setTimeout(() =>
  {process.stdout.write('\n')}, initializer);
};

spinner();

