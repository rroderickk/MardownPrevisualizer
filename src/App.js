import React from "react";
import { marked } from "marked";

const initialState = `
This is a paragraph.
# __H1__ SE VE ASÍ ESTA ETIQUETA HTML __\`<H1>h1</H1>\`__

## **H2** THIS IS H2 TAG \`**bold**\`

### **__H3__** H3 \`__bold text__\`

#### ***H4*** H4 \`#\` heading

##### [Visit my blog](https://rroderickk.github.io) \`#####\` H5

###### [checkThisRepo](https://github.com/rroderickk/node.git) \`[tag-link](https://Link.com)\` H6
![yoLo](https://rroderickk.github.io/images/avatar.png)

###### \`![imgName](Link)\`

#### Le creador de la maquina del tiempo **[seeThePost](https://www.youtube.com/watch?v=dQw4w9WgXcQ)**.

This it´s a list item:
- LIST ITEM 1.
- LIST ITEM 2.
* Five item	.
+ Six item.
1. First item.
2. Second item.
3. Third item.
    1. Indented item.
    2. Indented item.
4. Fourth item.

This is a inline: \`<div style="color:gold"><h1>Hola Mundo!</h1></div>\`

Result the this inline: <div style="color:gold"><h1>Hola Mundo!</h1></div>

This is a block of code:
\`\`\`
    let x = 1:
    let y = 2;
    let z = x + y;
\`\`\`

\`[referenceTag][1] Link \`        
[mDp][R1]: https://github.com/rroderickk/Node/tree/master/modulos "markdownPreviewRepository"    
[blog][R2]: https://rroderickk.github.io/ "rroderickkBlog"

# This its

<img src="/markdown512.png" alt="MardownIco512">

# <div style="color:gold">CheatSheet</div>

![icoMd](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)

`;


class App extends React.Component {
    state = {
        text: initialState,
    };

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    render() {
        const { text } = this.state;
        const markdown = marked(text, {breaks: true});
        return (
            <div>
                <h1 className="text-center m-4 text-white">Convierte tu text.md</h1>
                <div className="row">
                    <div className="col-6">
                        <h6 className="text-center text-white">
                            Enter your Md text here:{" "}
                        </h6>
                        <textarea
                            className="form-control p-2"
                            id="editor"
                            value={text}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-6 preview" >
                        <h6 className="text-center p-2 text-white">See your preview: </h6>
                        <div
                            className="preview rounded"
                            dangerouslySetInnerHTML={{ __html: markdown }} id="preview"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
