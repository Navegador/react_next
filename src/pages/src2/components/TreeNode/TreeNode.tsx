import React from 'react';
import { Node, TreeNodeProps } from '../../interface/Node';
import style from './TreeNode.module.css';

import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*
interface Props {
    node: {
        name:string,
        children?: Node[];
    }
  }
*/


//const BasePage = (props:{children: any}) =>{  
//const TreeNode = ({ node }) => {
const TreeNode = (TreeNodeProps: { node: Node[] }) => {
  //const hasChildren = TreeNodeProps.node.children && TreeNodeProps.node.children.length > 0;
  const hasChildren = TreeNodeProps.node.length > 0;
  console.log(TreeNodeProps);




  return (
    <div>
      {TreeNodeProps.node?.map((childNode, index,) => (
        <li className={style.css_ul}  >
          <FontAwesomeIcon icon={faFolder} size="1x" color="red" />
          <span className={style.caret}>{childNode.name}</span>

          {childNode.children ? (
            <ul className={style.css_ul} >
              <TreeNode key={index} node={childNode.children} />
            </ul>
          ) : (
            <></>
          )}

        </li>
      ))}
    </div>
  );

};

export default TreeNode;
/*
const BasePage = (props:{children: any}) =>{
    return(
        <div className={`BasePage_test ${style.BasePage}`} id="BasePage_id" > 1 {props.children}</div>
    )
}

*/
