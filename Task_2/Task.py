# Create a list of people
people = [
    {"name": "John Doe", "age": 30, "city": "New York"},
    {"name": "Jane Smith", "age": 22, "city": "Los Angeles"},
    {"name": "David Lee", "age": 28, "city": "Chicago"},
    {"name": "Alice Brown", "age": 35, "city": "Boston"},
]

# Filter people under 25 years old
filtered_people = [person for person in people if person["age"] >= 25]

# Sort the remaining people by city in alphabetical order
sorted_people = sorted(filtered_people, key=lambda person: person["city"])

# Print the final list of people
for person in sorted_people:
    print(f"Name: {person['name']}, Age: {person['age']}, City: {person['city']}")
