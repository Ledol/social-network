import { UserType} from "../redux/usersReducer";

export const updateObjectInArray = (items:Array<UserType>,
                                    itemId: number,
                                    newObjProp:{followed: boolean}) => {
    return items.map((u) =>
        u.id === itemId ? { ...u, ...newObjProp } : u
    )
}