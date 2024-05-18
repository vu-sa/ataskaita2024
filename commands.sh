## Convert all docx files in a directory to markdown

# find . -type f -name '*.docx' -print0 | while read -d $'\0' file; do pandoc -s "$file" -o "${file%.*}.md"; done

## Rename files in a directory to with dashes

# find . -type f -name "* *" -exec rename 's/ /-/g' {} + 