import React from 'react';
import {Node, TreeNodeProps} from '../../interface/Node';
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
const TreeNode = (TreeNodeProps:{ node:Node }) => {    
  const hasChildren = TreeNodeProps.node.children && TreeNodeProps.node.children.length > 0;
  console.log(TreeNodeProps);

  return (
    

    
    <li >
      <FontAwesomeIcon icon={faFolder} size="1x" color="red"  />
      <span className={style.caret}>{TreeNodeProps.node.name}</span>
      
      {hasChildren && (
        <ul className={style.css_ul} >
          {TreeNodeProps.node.children?.map((childNode, index) => (
            <TreeNode key={index} node={childNode} />
          ))}
        </ul>
      )}
    </li>
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
