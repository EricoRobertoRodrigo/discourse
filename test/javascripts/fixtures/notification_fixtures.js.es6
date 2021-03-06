/*jshint maxlen:10000000 */
import {
  LIKED_CONSOLIDATED_TYPE,
  REPLIED_TYPE
} from "discourse/widgets/concerns/notification-types";

export default {
  "/notifications": {
    notifications: [
      {
        id: 123,
        notification_type: REPLIED_TYPE,
        read: false,
        post_number: 2,
        topic_id: 1234,
        slug: "a-slug",
        data: { topic_title: "some title", display_username: "velesin" }
      },
      {
        id: 456,
        notification_type: LIKED_CONSOLIDATED_TYPE,
        read: false,
        data: { display_username: "aquaman", count: "5" }
      }
    ]
  }
};
