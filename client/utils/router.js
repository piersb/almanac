import * as reactiveHistory from 'meteor/quarterto:reactive-history'
import { withTracker } from 'meteor/react-meteor-data'
import React from 'react'
import { route_ } from 'boulevard'
import { compose, lifecycle, withProps } from 'recompact'

export const { link, setUrl, navigate: go, state, history } = reactiveHistory

const route = route_({
	getUrl({ url }) {
		return url
	},

	addParams(params, [{ state, url }]) {
		return [params, state, url]
	},

	fourOhFour(params, state, url) {
		return <h1>{url} not found</h1>
	},
})

const withHistoryLifecycle = lifecycle({
	componentDidMount() {
		reactiveHistory.start()
	},

	componentWillUnmount() {
		reactiveHistory.stop()
	},
})

const withRouter = withProps(({ routes }) => ({
	router: route(routes),
}))

const withHistory = withTracker(({ router }) => ({
	currentRoute: reactiveHistory.history.get(),
	children: router({
		url: reactiveHistory.history.get(),
		state: reactiveHistory.state.get(),
	}),
}))

export default compose(
	withHistoryLifecycle,
	withRouter,
	withHistory,
)
