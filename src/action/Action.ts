export const ACTION_ADD = "action_add";

export function actionAdd(txt)
{
    return {
        type:ACTION_ADD,
        content:txt
    }
}