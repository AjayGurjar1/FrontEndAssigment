# Create a list of people
people = [
    {"name": "Ajay", "age": 24, "city": "Ujjain"},
    {"name": "ram", "age": 32, "city": "Indore"},
    {"name": "karan", "age": 28, "city": "Bhopal"},
    {"name": "Vijay", "age": 35, "city": "Gwalior"},
]

# Filter people under 25 years old
filtered_people = [person for person in people if person["age"] >= 25]

# Sort the remaining people by city in alphabetical order
sorted_people = sorted(filtered_people, key=lambda person: person["city"])

# Print the final list of people
for person in sorted_people:
    print(f"Name: {person['name']}, Age: {person['age']}, City: {person['city']}")
