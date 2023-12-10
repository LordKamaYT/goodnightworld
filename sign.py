import os
import random
import base64
import argparse

def read_files(directory):
    files = [f for f in os.listdir(directory) if f.endswith(".8xp")]
    return files

def extract_content(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
    return content

def generate_formula_string(directory):
    num_files = len(os.listdir(directory))
    total_lines = sum(1 for file in os.listdir(directory) if file.endswith(".8xp") for line in open(os.path.join(directory, file)))

    formula_components = [
        ''.join(random.sample('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 32)),
        str(num_files),
        str(total_lines),
        "KAMA69$23"
    ]

    mixed_string = ''.join(random.sample(''.join(formula_components), len(''.join(formula_components))))

    return mixed_string

def encode_base64(final_string):
    return base64.b64encode(final_string.encode()).decode()

def output_results(directory, final_string):
    # Output to terminal
    print(f"{directory}: {final_string}")

    output_text_path = os.path.join(directory,"output")

    # Output to text file
    with open("output.txt", 'a') as txt_file:
        txt_file.write(f"{directory}: {final_string}\n")

    # Output to .8xv script
    with open(f"{output_text_path}_script.8xp", 'w') as script_file:
        script_file.write(f"\"{final_string}\"→Str1")


def main():
    parser = argparse.ArgumentParser(description="Generate a signed string for TI calculator.")
    parser.add_argument("--directory", "-d", type=str, required=True, help="Directory containing .8xv files")

    args = parser.parse_args()

    files = read_files(args.directory)
    
    if not files:
        print("No .8xp files found in the specified directory.")
        return

    final_string = generate_formula_string(args.directory)
    base64_encoded_string = encode_base64(final_string)

    output_results(args.directory, base64_encoded_string)

if __name__ == "__main__":
    main()
