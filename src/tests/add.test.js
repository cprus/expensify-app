const generateGreeting = (name) => `Hello, ${name}!`;

test ('should print name', () => {
    const result = generateGreeting("Carl");
    expect(result).toBe("Hello, Carl!");
})