"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dynamicDecorator(defaultArg, builder) {
    return function () {
        const args = arguments;
        if (args.length > 1) {
            builder(defaultArg).apply(null, args);
        }
        else {
            return builder(args[0]);
        }
    };
}
exports.dynamicDecorator = dynamicDecorator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFZQSxTQUFnQixnQkFBZ0IsQ0FBSSxVQUFhLEVBQUUsT0FBNkI7SUFDNUUsT0FBTztRQUNILE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFURCw0Q0FTQyJ9