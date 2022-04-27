import { mount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button", () => {
  const wrapper = mount(Button);

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("listens to click events", async () => {
    const onClickEvent = jest.fn();
    const wrapper = mount(Button, {
      listeners: {
        click: onClickEvent,
      },
    });
    await wrapper.find("button").trigger("click");
    expect(onClickEvent).toHaveBeenCalledTimes(1);
  });

  test("accepts text into default slot", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Primary",
      },
    });

    expect(wrapper.text()).toContain("Primary");
  });
});
