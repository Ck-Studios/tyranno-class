import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/default-highlight";
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";
import React from "react";
import ReactMarkdown from "react-markdown";


export default function Markdown(props) {
  return (
    <div style={{fontSize: 20}}>
      <ReactMarkdown
        source={props.source}
        renderers={{
          text: TextBlock,
          code: CodeBlock,
          tableCell: TableCellBlock,
          inlineCode: InlineCodeBlock,
          blockquote: BlockQuoteBlock,
          image: ImageBlock,
        }}
      />
    </div>
  )
}


function TextBlock(props) {
  const {value} = props;
  let fontSize = 18;

  if (value.includes('✏️')) {
    fontSize = 30;
  }

  return (
    <span style={{fontSize: fontSize, lineHeight: 2}}>
      {props.value}
    </span>
  )
}

function InlineCodeBlock(props) {
  return (
    <span style={{background: '#ff0'}}>
            {props.value}
        </span>
  );
}

function BlockQuoteBlock(props) {
  return (
    <div style={{border: '1px dashed #aaa', borderRadius: 10, paddingLeft: 10, margin: 5}}>
      {props.children}
    </div>
  );
}

function CodeBlock(props) {
  // return (
  //   <pre style={{background: '#000', color: '#fff', padding: 10, fontSize: 15}}>
  //           <code>
  //             {props.value}
  //           </code>
  //         </pre>
  // );
  return (
    <SyntaxHighlighter language="python" style={docco}>
      {props.value}
    </SyntaxHighlighter>
  );
}

function TableCellBlock(props) {
  let style = {
    textAlign: props.align ? props.align : 'center',
    padding: 5
  };

  if (props.isHeader) {
    style.background = '#ff0';
    style.border = '1px solid #ccc';
    style.borderLeft = 0;
    style.borderRight = 0;
  } else {
    style.borderBottom = '1px solid #eee';
  }

  return (
    <td style={style}>
      {props.children}
    </td>
  );
}

function ImageBlock(props) {
  // console.log(props);

  if (props.alt === 'video') {
    return (
      <video controls="controls" width="100%">
        <source src={props.src}/>
      </video>
    )
  }

  return (
    <img src={props.src} alt="no img" width="100%"/>
  )

}
